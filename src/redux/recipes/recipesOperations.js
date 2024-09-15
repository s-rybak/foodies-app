import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "services/api";

export const getRecipeById = createAsyncThunk(
    "recipes/getRecipeById",
    async (id, thunkApi) => {
        try {
            const {data} = await api.get(`api/recipes/${id}`);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
);

export const createRecipe = createAsyncThunk(
    "recipes/createRecipe",
    async (recipe, thunkApi) => {
        try {
            const formData = new FormData();
            Object.keys(recipe).forEach((key) => {
                if (key === "ingredients") {
                    recipe.ingredients.forEach((ingredient, index) => {
                        Object.keys(ingredient).forEach((ingredientKey) => {
                            formData.append(
                                `ingredients[${index}][${ingredientKey}]`,
                                ingredient[ingredientKey],
                            );
                        });
                    });
                } else {
                    formData.append(key, recipe[key]);
                }
            });
            const {data} = await api.post("api/recipes",formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
);
//example of usage
// createRecipe({
//     title: "title",
//     instructions: "description",
//     description: "description",
//     thumb:File, //file from input
//     time: 40,
//     ingredients: [
//         {
//             id: "name",
//             measure: "10l",
//         },
//     ],
//     categoryId:"category_id",
//     areaId:"area_id",
// });

export const deleteRecipe = createAsyncThunk(
    "recipes/deleteRecipe",
    async (id, thunkApi) => {
        try {
            await api.delete(`api/recipes/${id}`);
            return id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
);
