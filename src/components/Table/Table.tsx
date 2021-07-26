import React, { useState, useEffect } from "react";

import "./Table.scss";

interface tableData {
  id: string;
  user_id: string;
  title: string;
  body: string;
}

const Table = () => {
  const [post, setPost] = useState<tableData[]>([]);

  // useEffect(() => {
  //   api.get("posts").then((response) => setPost(response.data));
  // }, []);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/posts")
      .then((response) => response.json())
      .then((res) => setPost(res.data));
  }, []);

  console.log(post);
  return (
    <section>
      <div>
        <h4>Últimas Postagens</h4>
        <table>
          <thead>
            <tr>
              <th>titulo</th>
              <th>conteúdo</th>
            </tr>
          </thead>
          {
            // <thead>
            //   {head.map((item) => (
            //     <tr>
            //       <th>{item}</th>
            //     </tr>
            //   ))}
            // </thead>
          }

          {/* <tbody>
            {post.map((i) => (
              <tr key={i.id}>
                <td>{i.title}</td>
                <td>{i.body}</td>
              </tr>
            ))}
          </tbody> */}
          <tbody>
            {post.map((i) => (
              <tr>
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
