# nss-gifter
## Utility Classes, Special-Purpose Repository Methods and More Complex SQL
### Book 3, Chap 3 Exercises
1. Update the PostRepository.GetById() method to include the UserProfile object in the returned Post object. DONE
2. Add a GetPostByIdWithComments() method to your PostRepository that gets a single Post and includes that Post's comments.  DONE
3. Create a UserProfileController and UserProfileRepository with all the basic CRUD operations. DONE
4. Add methods to the UserProfileController and UserProfileRepository to return a single UserProfile along with the list of posts authored by that user. DONE
### Book 3, Chap 4 Query Parameters Exercises
1. Update your Gifter API to allow searching of Posts by title as illustrated in this chapter.
2. Update the search endpoint to search by title and the caption.
3. Add a new endpoint, /api/post/hottest?since=<SOME_DATE> that will return posts created on or after the provided date.
