export const Spock = () => {
  return <Character src="/images/icon-spock.svg" name="spock" />;
};
export const Scissors = () => {
  return <Character src="/images/icon-scissors.svg" name="scissors" />;
};
export const Rock = () => {
  return <Character src="/images/icon-rock.svg" name="rock" />;
};
export const Paper = () => {
  return <Character src="/images/icon-paper.svg" name="paper" />;
};
export const Lizard = () => {
  return <Character src="/images/icon-lizard.svg" name="lizard" />;
};

const Character = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="character inline-flex transform translate-y-2 m-2 ">
      <div className={`round outer-shadow ${name}-gradient inline-flex`}>
        {/* MAIN BORDER */}
        <div
          className={`round ${name}-gradient inline-flex transform -translate-y-2`}
        >
          <div className="round inner-shadow m-4 overflow-hidden">
            <div
              className={`inner round bg-white inline-flex justify-center w-36 h-36 transform translate-y-2`}
            >
              <img
                src={src}
                alt={name}
                className="self-center h-16 transform -translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
