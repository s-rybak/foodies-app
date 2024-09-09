import Icon from "../../shared/Icon/Icon";
import Input from "../../shared/Input/Input";
import styles from "./ImageUploader.module.css";

const ImageUploader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.uploadBox}>
        <label className={styles.customUploadBtn}>
          <Input type="file" name="thumb"/>

         {/* TODO: add image preview */}
          <div className={styles.btnWrapper}>
          <>
            <Icon
                  iconId="icon-capture-photo-camera"
                  width="50px"
                  height="50"
                  customStyle={styles.photoIcon}
            />
            <span>Upload a photo</span>
          </>
          {/* TODO: // show errors */}
          </div>
        </label>
      </div>
      
        <label className={styles.uploadAnotherSpan}>
          <Input type="file" name="thumb" />
          Upload another photo
        </label>
      
    </div>
  );
};

export default ImageUploader;
