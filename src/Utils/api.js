import axios from 'axios';

const newsApi = axios.create({
	baseURL: 'https://jasneastwd-nc-news.herokuapp.com/api',
});

export const getArticles = async () => {
	const { data } = await newsApi.get('/articles');
	return data.articles;
};

export const getArticleById = async (article_id) => {
	const { data } = await newsApi.get(`/articles/${article_id}`);
	return data.article;
};

export const getTopics = async () => {
	const { data } = await newsApi.get('/topics');
	return data.topics;
};

// export const getArticlesByTopic = async (topic) => {
// 	const { data } = await newsApi.get(`/articles?topic=${topic}`);
// 	return data.topic;
// };

export const getUsers = async () => {
	const { data } = await newsApi.get(`/users`);
	return data.users;
};
export const getAccountByUsername = async (username) => {
	const { data } = await newsApi.get(`/users/${username}`);
	return data.user;
};
export const getCommentsById = async (article_id) => {
	const { data } = await newsApi.get(`/articles/${article_id}/comments`);
	return data.comments;
};
