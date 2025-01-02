const CharacterCard = () => {
  return (
    <div className="flex py-3 px-3 sm:px-5 flex-col justify-center align-center gap-3 text-start text-xl md:col-start-1 md:col-end-1 bg-gray-950 border-2 border-gray-700 rounded-xl shadow-xl self-start">
      <div className="font-bold font-custom text-2xl text-center xl:text-3xl">
        Jon Snow
      </div>
      <img
        src="src/assets/jon-icon.webp"
        alt="jon-snow"
        className="rounded-lg self-center  max-h-[400px] md:max-h-[500px] border-2 border-white"
      />
      <div>
        <b>House:</b> Targaryen
      </div>
      <div>
        <b>Born:</b> As Aegon Targaryen, 281 AC, Tower Of Joy, Dorne
      </div>
      <div>
        <b>Died:</b> 302 AC, Castle Black, later ressurected
      </div>
      <div>“My Watch Has Ended”</div>
    </div>
  );
};

export default CharacterCard;
