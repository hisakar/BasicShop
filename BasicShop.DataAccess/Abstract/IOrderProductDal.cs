using BasicShop.Core.DataAccess;
using BasicShop.Entity;

namespace BasicShop.DataAccess.Abstract
{
    public interface IOrderProductDal : IEntityRepository<OrderProduct>
    {
    }
}