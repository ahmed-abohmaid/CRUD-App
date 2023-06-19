import Header from './components/Header';

function App() {
  return (
    <div className="px-[50px]">
      <Header />
      <div>
        <table className="w-[70%] mx-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-md font-semibold tracking-wide text-left">
                No.
              </th>
              <th className="p-3 w-[70%] text-md font-semibold tracking-wide text-left">
                Title
              </th>
              <th className="p-3 w-[10%] text-md font-semibold tracking-wide text-left"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white">
              <td className="p-3 text-gray-700 text-md">01</td>
              <td className="p-3 text-gray-700 text-md">this is title 1</td>
              <td className="p-3 text-gray-700 text-md">
                <div className="flex items-center gap-2">
                  <button className="px-2 py-[1px] bg-green-500 rounded-md text-white">
                    Edit
                  </button>
                  <button className="px-2 py-[1px] bg-red-500 rounded-md text-white">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-gray-700 text-md">02</td>
              <td className="p-3 text-gray-700 text-md">this is title 1</td>
              <td className="p-3 text-gray-700 text-md">
                <div className="flex items-center gap-2">
                  <button className="px-2 py-[1px] bg-green-500 rounded-md text-white">
                    Edit
                  </button>
                  <button className="px-2 py-[1px] bg-red-500 rounded-md text-white">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
