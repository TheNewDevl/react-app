import { useParams } from "react-router-dom";

type LodgingProps = {};

const Lodging = ({}: LodgingProps) => {
  const { id } = useParams();

  return (
    <div className="Lodging/Lodging">
      <p>{id}</p>
    </div>
  );
};

export default Lodging;
/** Created by carlos on 22/11/2022 */
