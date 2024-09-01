import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import CancelIcon from '@mui/icons-material/Cancel';
import {
  Box,
  Button,
  LinearProgress,
  type LinearProgressProps,
  Typography
} from '@mui/material';

import * as SystemApi from 'api/system';

import { useRequest } from 'alova/client';
import { useI18nContext } from 'i18n/i18n-react';

import DragNdrop from './DragNdrop';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const SingleUpload = ({ doRestart }) => {
  const [md5, setMd5] = useState<string>();
  const [file, setFile] = useState<File>();
  const { LL } = useI18nContext();

  const {
    loading: isUploading,
    uploading: progress,
    send: sendUpload,
    abort: cancelUpload
  } = useRequest(SystemApi.uploadFile, {
    immediate: false
  }).onComplete(({ data }) => {
    if (data) {
      setMd5(data.md5 as string);
      toast.success(LL.UPLOAD() + ' MD5 ' + LL.SUCCESSFUL());
      setFile(undefined);
    } else {
      doRestart();
    }
  });

  useEffect(async () => {
    if (file) {
      await sendUpload(file).catch((error: Error) => {
        if (error.message === 'The user aborted a request') {
          toast.warning(LL.UPLOAD() + ' ' + LL.ABORTED());
        } else if (error.message === 'Network Error') {
          toast.warning('Invalid file extension or incompatible bin file');
        } else {
          toast.error(error.message);
        }
      });
    }
  }, [file]);

  return (
    <>
      {isUploading ? (
        <>
          <Box width="100%" pl={2} pr={2}>
            <LinearProgressWithLabel
              value={
                progress.total === 0 || progress.loaded === 0
                  ? 0
                  : progress.loaded <= progress.total
                    ? Math.round((progress.loaded * 100) / progress.total)
                    : Math.round((progress.total * 100) / progress.loaded)
              }
            />
          </Box>

          <Button
            sx={{ ml: 2, mt: 2 }}
            startIcon={<CancelIcon />}
            variant="outlined"
            color="secondary"
            onClick={cancelUpload}
          >
            {LL.CANCEL()}
          </Button>
        </>
      ) : (
        <DragNdrop onFileSelected={setFile} />
      )}

      {md5 && (
        <Box mt={2}>
          <Typography variant="body2">{'MD5: ' + md5}</Typography>
        </Box>
      )}
    </>
  );
};

export default SingleUpload;
