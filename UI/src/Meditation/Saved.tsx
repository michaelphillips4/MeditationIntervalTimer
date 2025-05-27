const Saved = () => {
  return (
    <div id="savedMeditations" className="hide">
      <h3>Saved Meditations</h3>
      <ol id="savedList"></ol>

      <button id="button-create" accessKey="c" title="Create New Meditation">
        Create New Meditation
      </button>
    </div>
  );
};

export default Saved;
