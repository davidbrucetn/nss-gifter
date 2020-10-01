using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetById(int userId);
        UserProfile GetByIdWithPosts(int userId);
        void Update(UserProfile userProfile);
    }
}