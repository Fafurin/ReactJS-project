import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {api} from "../../constants";

export interface ArticlesState {
    articles: IArticle[],
    loading: boolean,
    error: string
}

interface IArticle {
    id: string,
    title: string
}

const initialState: ArticlesState = {
    articles: [],
    loading: false,
    error: ''
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticles(state, action: PayloadAction<IArticle[]>){
            state.articles = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = ''
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
                state.loading = false;
                state.articles = action.payload;
            })
            .addCase(fetchData.rejected, (state, action: any) => {
                state.error = action.error;
            });
    },
});

export const fetchData = createAsyncThunk(
    'articles/fetchArticles',
    async () => {
        const response = await fetch(api);
        return await response.json();
    }
)

export const { addArticles } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;