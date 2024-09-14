import { useEffect } from "react";
import Icon from "../../shared/Icon/Icon";
import Input from "../../shared/Input/Input";
import styles from "./ImageUploader.module.css";

const ImageUploader = ({ register, setValue, imagePreview, setImagePreview, errors, watch }) => {
  useEffect(() => {
    const subscription = watch((value) => {
      if (value.thumb[0]) {
        setImagePreview(URL.createObjectURL(value.thumb[0]));
        setValue("thumb", value.thumb[0]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setImagePreview, setValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.uploadBox}>
        <label className={styles.customUploadBtn}>
          <Input type="file" name="thumb" register={register} setValue={setValue} errors={errors} />

          {imagePreview && (
            <img src={imagePreview} alt="Recipe Preview" className={styles.imagePreview} />
          )}
          <div className={styles.btnWrapper}>
            {!imagePreview && (
              <>
                <Icon
                  iconId="icon-capture-photo-camera"
                  width="50px"
                  height="50"
                  customStyle={styles.photoIcon}
                />
                <span>Upload a photo</span>
              </>
            )}

            {errors.thumb && <p className={styles.errorMsg}>{errors.thumb.message}</p>}
          </div>
        </label>
      </div>
      {imagePreview && (
        <label className={styles.uploadAnotherSpan}>
          <Input type="file" name="thumb" register={register} setValue={setValue} errors={errors} />
          Upload another photo
        </label>
      )}
    </div>
  );
};

export default ImageUploader;