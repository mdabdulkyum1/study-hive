
const TableLoading = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="w-1/5">
              <span className="skeleton w-full h-6"></span>
            </th>
            <th className="w-1/5">
              <span className="skeleton w-full h-6"></span>
            </th>
            <th className="w-1/5">
              <span className="skeleton w-full h-6"></span>
            </th>
            <th className="w-1/5">
              <span className="skeleton w-full h-6"></span>
            </th>
            <th className="w-1/5">
              <span className="skeleton w-full h-6"></span>
            </th>
          </tr>
        </thead>
        <tbody>
  {[...Array(5)].map((_, index) => (
    <tr key={index}>
      <td>
        <div className="skeleton w-full h-6 bg-gray-400"></div>
      </td>
      <td>
        <div className="skeleton w-full h-6 bg-gray-400"></div>
      </td>
      <td>
        <div className="skeleton w-full h-6 bg-gray-400"></div>
      </td>
      <td>
        <div className="skeleton w-full h-6 bg-gray-400"></div>
      </td>
      <td>
        <div className="skeleton w-full h-6 bg-gray-400"></div>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default TableLoading;
