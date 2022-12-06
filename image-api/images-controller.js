import multer from 'multer';
import path from 'path';

const ImagesController = (app) => {
  const storage = multer.diskStorage({
    destination: './images',
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
  });

  const checkFile = (file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLocaleLowerCase()
    );
    const mime = fileTypes.test(file.mimetype);

    if (mime && extname) {
      return cb(null, true);
    }

    return cb('Error: Images Only');
  };

  const allowedFiles = (req, file, cb) => {
    checkFile(file, cb);
  };

  const upload = multer({ storage, fileFilter: allowedFiles }).single('file');

  const createImage = (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.send(err.toString());
      } else {
        res.send(req.file);
      }
    });
  };

  app.post('/upload', createImage);
};

export default ImagesController;
