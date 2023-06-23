const Character = () => {
  const view = `
    <div class='characters-inner'>
      <article class='characters__card'>
        <img src="imaage" alt="name_character">
        <h2>Name</h2>
      </article>
      <article class='characters__card'>
        <h3>Episodes: </h3>
        <h3>Status: </h3>
        <h3>Species: </h3>
        <h3>Gender: </h3>
        <h3>Origen: </h3>
        <h3>Last Location</h3>
      </article>
    </div>
  `;
  return view
}
export default Character