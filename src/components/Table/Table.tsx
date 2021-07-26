import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./Table.scss";

interface tableData {
  id: string;
  user_id: string;
  title: string;
  body: string;
}

const Table = () => {
  const [post, setPost] = useState<tableData[]>([]);

  useEffect(() => {
    api.get("posts").then((response) => {
      const result = response.data;
      setPost(result);
    });
  }, []);

  return (
    <section className="">
      <div className="container">
        <h4>Últimas Postagens </h4>
        <table>
          <thead>
            <th>Título</th>
            <th>Conteúdo</th>
          </thead>
          <tbody>
            {post.map((i) => (
              <tr key={i.id}>
                <td>{i.title}</td>
                <td>{i.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
