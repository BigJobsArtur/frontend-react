import React, { useState, useEffect } from "react";
import api from "../../services/api";

import prevarrow from "../../assets/img/prevarrow.svg";
import nxtarrow from "../../assets/img/nxtarrow.svg";

import "./Table.scss";

interface TableData {
  id: string;
  user_id: string;
  title: string;
  body: string;
}
interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

const Table = () => {
  const [post, setPost] = useState<TableData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination>();

  useEffect(() => {
    api.get(`posts`).then((response) => {
      setPost(response.data.data);
      setPagination(response.data.meta.pagination);
    });
  }, []);

  useEffect(() => {
    api.get(`posts?page=${currentPage}`).then((response) => {
      setPost(response.data.data);
      setPagination(response.data.meta.pagination);
    });
  }, [currentPage]);

  return (
    <section>
      <div>
        <h4>Últimas Postagens</h4>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Conteúdo</th>
            </tr>
          </thead>
          <tbody>
            {post.map((i) => (
              <tr key={i.id}>
                <td className="title">
                  <p className="m-0">{i.title}</p>
                </td>
                <td className="posts">{i.body}</td>
              </tr>
            ))}
            <tr className="pagination-count">
              <td>
                {`Exibindo ${pagination ? pagination.limit : 0} postagens `}
              </td>
              <td>
                {pagination && pagination.page > 1 && (
                  <button
                    onClick={() => setCurrentPage((prevState) => prevState - 1)}
                  >
                    <img src={prevarrow} alt="" />
                  </button>
                )}
              </td>
              <td className="pagination-numbers ">
                {pagination && pagination.page > 1 && (
                  <button>{pagination.page - 1}</button>
                )}

                <button className="current_page">
                  {pagination && pagination.page}
                </button>

                {pagination && pagination.page < pagination.pages && (
                  <button>{pagination.page + 1}</button>
                )}
              </td>
              <td>
                {pagination && pagination.page < pagination.pages && (
                  <button
                    onClick={() => setCurrentPage((prevState) => prevState + 1)}
                  >
                    <img src={nxtarrow} alt="" />
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
