using BasicShop.Core.DataAccess.EntityFramework;
using BasicShop.DataAccess.Abstract;
using BasicShop.Entity;

namespace BasicShop.DataAccess.Concrete.EntityFramework
{
    public class EfCategoryDal :EfEntityRepositoryBase<Category,BasicShopContext>, ICategoryDal
    {}
}