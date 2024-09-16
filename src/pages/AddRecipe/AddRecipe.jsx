import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import yupSchema from "../../components/AddRecipe/helpers/yupSchema";
import { toast } from "react-toastify";
import styles from "./AddRecipe.module.css";
import PathInfo from "../../components/PathInfo/PathInfo";

import MainTitle from "../../components/shared/MainTitle/MainTitle";
import Subtitle from "../../components/shared/Subtitle/Subtitle";
import ImageUploader from "../../components/AddRecipe/ImageUploader/ImageUploader";
import Input from "../../components/shared/Input/Input";
import IngredientSelector from "../../components/AddRecipe/IngredientSelector/IngredientSelector";
import IconButton from "../../components/shared/IconButton/IconButton";
import Button from "../../components/shared/Button/Button";
import stylesInput from "../../components/AddRecipe/CustomInput.module.css";
import useAutoResizeTextarea from "../../utilities/hooks/useAutoResizeTextarea";

import { selectCategories } from "../../redux/categories/categoriesSelectors";
import { fetchCategories } from "../../redux/categories/categoriesOperations";
import { selectIngredients } from "../../redux/ingredients/ingredientsSelectors";
import { fetchIngredients } from "../../redux/ingredients/ingredientsOperations";
import { selectAreas } from "../../redux/areas/areasSelectors";
import { fetchAreas } from "../../redux/areas/areasOperations";

import { createRecipe } from "../../redux/recipes/recipesOperations";
import {selectRecipeCreateIsLoading} from "../../redux/recipes/recipesSelectors";
import AnimationLoader from "../../components/Loader/AnimationLoader";

const AddRecipe = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      selectedIngredients: [],
    },
  });
  const navigate = useNavigate();
  const [time, setTime] = useState(10);
  const [wordCount, setWordCount] = useState(0);
  const maxWords = 200;
  const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();
  const isLoadingCreateRecipe = useSelector(selectRecipeCreateIsLoading);
  const categoriesData = useSelector(selectCategories);
  useEffect(() => {
      dispatch(fetchCategories());
  }, [dispatch]);
    
  const categories = categoriesData.map(item => ({
    value: item.id,
    label: item.name,
  }));
  
  const ingredientsData = useSelector(selectIngredients);
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  
  
  const ingredients = ingredientsData.map(item => ({
    value: item.id,
    label: item.name,
    img: item.img,
  }));

  const areasData = useSelector(selectAreas);
    useEffect(() => {
      dispatch(fetchAreas());
  }, [dispatch]);
    
  const areas = areasData.map(item => ({
    value: item.id,
    label: item.name,
  }));

  const handleWordCount = (event) => {
    const value = event.target.value;
    const words = value
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    if (words.length <= maxWords) {
      setWordCount(words.length);
    } else {
      const limitedText = words.slice(0, maxWords).join(" ");
      event.target.value = limitedText;
      setWordCount(maxWords);
      toast.error(`max length ${maxWords} words`);
    }
  };
  useAutoResizeTextarea(styles.textarea);

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const onSubmit = async (data) => {
    try {
        const response = await dispatch(createRecipe({
            title: data.title,
            instructions: data.instructions,
            description: data.description,
            time: time.toString(),
            categoryId: data.category,
            areaId: data.area,
            thumb: data.thumb,
            ingredients: selectedIngredients.map((ingredient) => ({
                id: ingredient.id,
                measure: ingredient.measure,
            })),
        }));

        if (response.payload && response.payload.title) {
          const createdRecipeName = response.payload.title;
          toast.success(`Recipe added: ${createdRecipeName}`);
          navigate(`/user/${response.payload.user.id}`);
          reset();
        } else {
           toast.error('Failed to create recipe: No payload in response');
        }
    } catch (error) {
      toast.error(`Error creating recipe: ${error}`);
    }
};

   const handleReset = () => {
    reset();
    setTime(10);
    setImagePreview(null);
    setSelectedIngredients([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleAndCrumpsWraper}>
        <div className={styles.breaCrumbs}>
          <PathInfo currentPage="Add Recipe" />
        </div>

        <div className={styles.titleWrapper}>
          <MainTitle text="add recipe" />
          <Subtitle text ="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}  className={styles.form}>
        <div className={styles.formWrapper}>
          <ImageUploader
            register={register}
            setValue={setValue}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            watch={watch}
            errors={errors}
          />

          <div>
            <div className={styles.nameInputWrapper}>
              <Input
                register={register}
                type="text"
                name="title"
                placeholder="The name of the recipe"
                classname={styles.nameInput}
              />
              {errors.title && <p className={styles.errorTitle}>{errors.title.message}</p>}
            </div>

            <div className={styles.recipeData}>
              <div className={styles.categoryAndTime}>
                <div className={styles.recipeData}>
                  <IngredientSelector
                    register={register}
                    ingredients={ingredients}
                    categories={categories}
                    areas={areas}
                    time={time}
                    setTime={setTime}
                    setValue={setValue}
                    selectedIngredients={selectedIngredients}
                    setSelectedIngredients={setSelectedIngredients}
                    watch={watch}
                    errors={errors}
                  />
                  {errors.selectedIngredients && (
                    <p className={styles.errorMsg}>{errors.selectedIngredients.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.recipeIncstructions}>
              <h2 className={styles.subheadear}>Recipe preparation</h2>
              <div className={`${styles.textareaWrapper} ${stylesInput.form__group} ${stylesInput.field}`}>
                <textarea
                  {...register("instructions")}
                  onInput={handleWordCount}
                  id="instructions"
                  name="instructions"
                  placeholder="Enter recipe"
                  maxLength="none"
                  className={`${styles.textarea} ${stylesInput.form__field}`}
                />
                <label className={`${styles.labelPrep} ${stylesInput.form__label}`}>
                  Enter recipe
                </label>
                <span className={styles.symbolCounter}>
                  {wordCount}/{maxWords}
                </span>
                {errors.instructions && (
                  <p className={styles.errorMsg}>{errors.instructions.message}</p>
                )}
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <IconButton
                iconId="icon-trash"
                type="button"
                onClick={handleReset}
                width="20"
                height="20"
                style={styles.trashBtn}
                styleSVG={styles.iconTrash}
              />

              {isLoadingCreateRecipe ? <AnimationLoader />: <Button text="Publish" type="submit" className={styles.button} /> }
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;