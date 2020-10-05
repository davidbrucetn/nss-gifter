using Gifter.Models;
using System;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        List<Post> DateSearch(DateTime searchDate, bool sortDescending);
        void Delete(int id);
        List<Post> GetAll();
        List<Post> GetAllWithComments();
        Post GetById(int postId);
        Post GetPostByIdWithComments(int postId);
        List<Post> Search(string criterion, int userProfileId, bool sortDescending);
        void Update(Post post);
    }
}