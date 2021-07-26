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
  const [post, setPost] = useState([]);
  const [head, setHead] = useState(["titulo", "conteudo"]);

  useEffect(() => {
    api.get("posts").then((response) => setPost(response.data));
  }, []);

  return (
    <section className="">
      <div className="">
        <h4>Últimas Postagens</h4>
        <table>
          {/* <thead>
            {head.map((item) => (
              <tr>
                <th>{item}</th>
              </tr>
            ))}
          </thead> */}

          {/* <tbody>
            {post.map((i, index) => (
              <tr key={index}>
                <td>{i.title}</td>
                <td>{i.body}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </section>
  );
};

export default Table;
