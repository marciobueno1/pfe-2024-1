export const Dado = ({ valor, exibirImg }) => {
  return (
    <>
      {exibirImg && (
        <img
          src={`/img/dado${valor}.png`}
          alt={`Dado com valor ${valor}`}
          style={{ width: 100, height: 100 }}
        />
      )}
      <h2>Dado = {valor}</h2>
    </>
  );
};
