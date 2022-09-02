import fotoLeydi from '../../assets/fotoLeydi.png';

export const SobreMi = () => {
  return (
    <div className="sobreMi ">
        <div className="text-2xl font-black text-center pt-2 underline">Sobre mí</div>
        <img src={fotoLeydi} className="w-1/3 pt-16" />
    </div>
  )
}
