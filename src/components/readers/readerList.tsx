import type { IReader } from "../../types/reader.types"
import ReaderItem from "./readerItem"

interface ReaderListProps {
 readers: IReader[];
}
const ReaderList = ({readers}: ReaderListProps) => {
    return(
        <div className="reader-list">
            {readers.map(reader =>{
                return(
                    <ReaderItem reader={reader} key={reader.id}/>
                )
            })}
        </div>

    )
}

export default ReaderList