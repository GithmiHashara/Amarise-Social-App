import { create } from "zustand";

const usePostStore = create((set) => ({
	posts: [], //empty array
	createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
	deletePost: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
	setPosts: (posts) => set({ posts }),
	addComment: (postId, comment) =>
		set((state) => ({ //call setter function
			posts: state.posts.map((post) => {
				if (post.id === postId) {
					return {
						...post,
						comments: [...post.comments, comment], //update comment array
					};
				}
				return post;
			}),
		})),
}));

export default usePostStore;