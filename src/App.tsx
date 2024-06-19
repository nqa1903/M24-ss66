import React from "react";

export default function App() {
  return (
    <div className="w-[1200px] h-[480px] m-auto pt-4 border-2">
      <div className="flex items-center">
        <div className="flex-auto text-xl font-medium px-2">
          Quản lý mượn trả sách
        </div>
        <button className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Thêm thông tin
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Tên sách
              </th>
              <th scope="col" className="px-6 py-3">
                Sinh viên mượn
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày mượn
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày trả
              </th>
              <th scope="col" className="px-6 py-3">
                Trạng thái
              </th>
              <th scope="col" className="px-6 py-3">
                Sửa
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="px-6 py-4">A</td>
              <td className="px-6 py-4">Ngô Quang Anh</td>
              <td className="px-6 py-4">18/6/2003</td>
              <td className="px-6 py-4">19/6/2003</td>
              <td className="px-6 py-4">
                <span className="border-2 rounded-full bg-green-600 text-white border-transparent px-3.5 py-1.5">
                  Đã trả
                </span>
              </td>
              <td className="px-6 py-4 text-right flex items-center">
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-3.5 py-1.5 text-center flex-auto m-1">
                  Sửa
                </button>
                <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg text-sm px-3.5 py-1.5 text-center flex-auto m-1">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <form>
        <div>
          <h3>Thêm thông tin mượn sách</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </form>
    </div>
  );
}
