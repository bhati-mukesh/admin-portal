import React, { useState } from "react";
import "./Table.css";

const Table = (props) => {
  // limit
  const initialData = props.limit
    ? props?.bodyData?.slice(0, Number(props.limit))
    : props.bodyData;
  const [showData, setShowData] = useState(initialData);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(
    Math.floor(props?.bodyData.length / Number(props.limit))
  );

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {props.headerData && props.renderHeader && (
            <thead>
              <tr>
                {props.headerData.map((item, idx) =>
                  props.renderHeader(item, idx)
                )}
              </tr>
            </thead>
          )}
          {props.bodyData && props.renderBody && (
            <tbody>
              {showData.map((item, idx) => props.renderBody(item, idx))}
            </tbody>
          )}
        </table>
      </div>
      {props.limit && lastPage != 1 && (
        <div className="table__pagination">
          <div
            className="table__pagination-item"
            onClick={() => {
              if (page === 1) return;
              setShowData(
                props?.bodyData?.slice(
                  Number(props.limit) * page - Number(props.limit),
                  Number(props.limit) * page
                )
              );
              setPage((prev) => prev - 1);
            }}
          >
            Prev
          </div>
          <div
            className="table__pagination-item"
            onClick={() => {
              if (page === lastPage) return;
              setShowData(
                props?.bodyData?.slice(
                  Number(props.limit) * page,
                  Number(props.limit) * page + Number(props.limit)
                )
              );
              setPage((prev) => prev + 1);
            }}
          >
            Next
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
