export default function Pagination({ limit, totalPosts, page, setPage }) {
  const numPages = Math.ceil(totalPosts / limit);
  return (
    <div>
      {Array(numPages).map((_, i) => (
        <button key={i + 1} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}
