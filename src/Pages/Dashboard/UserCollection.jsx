// import { Face3Outlined } from "@mui/icons-material";
import { Dropdown, Space, FloatButton } from "antd";
import useUsers from "../../Hooks/useUsers";
import { FaTrashCan, FaRegFutbol, FaBuffer } from "react-icons/fa6";

const UserCollection = () => {
  const [users] = useUsers();
  console.log(users);
  const userRole = users.map((item) => {
    return item?.role;
  });
  const items = [
    {
      key: "1",
      label: (
        <button className="flex items-center gap-2 hover:text-pink-600 ">
          <FaTrashCan></FaTrashCan> Delete
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button className="flex items-center gap-2 hover:text-pink-600">
          <FaRegFutbol></FaRegFutbol> Update
        </button>
      ),
    },
  ];

  return (
    <div>
      <h4 className="text-xl font-semibold text-center">
        Total User: {users?.length || 0}
      </h4>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name & Photo</th>
              <th>Info</th>
              <th>Action</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                      <div className="text-sm opacity-50">
                        {item?.location || <p className="text-sm">Unknown</p>}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.address || <p className="text-sm">Unknown</p>}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item?.email}
                  </span>
                </td>
                <td>
                  <div
                    onClick={(e) => e.preventDefault()}
                    className="flex gap-2"
                  >
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottom"
                    >
                      <Space>
                        <FaBuffer className="text-5xl btn btn-ghost btn-xs"></FaBuffer>
                      </Space>
                    </Dropdown>
                  </div>
                </td>
                <th className="">
                  <button>
                    {userRole == "admin" ? (
                      <p className="text-sm text-green-700">Admin</p>
                    ) : (
                      <p>Make Admin</p>
                    )}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCollection;
