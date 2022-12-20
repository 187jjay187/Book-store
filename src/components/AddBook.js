// create add book component
const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // create useState and new handle function
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="book title"
      />
      <input
        name="author"
        type="text"
        placeholder="author name"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
export default AddBook;
