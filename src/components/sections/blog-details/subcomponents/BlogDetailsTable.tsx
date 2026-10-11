interface BlogTableProps {
  headers: string[];
  rows: {
    element: string;
    question: string;
    purpose: string;
  }[];
}

export default function BlogDetailsTable({ headers, rows }: BlogTableProps) {
  return (
    <div className="table-responsive my-4">
      <table className="table table-bordered table-striped tj_table tj-fade-anim m-0">
        <thead className="table-light">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-3 fw-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td className="p-3 fw-semibold">{row.element}</td>
              <td className="p-3 text-muted">{row.question}</td>
              <td className="p-3 text-muted">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
