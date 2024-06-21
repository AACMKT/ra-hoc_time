import { DateTimePretty } from './DateTimePretty';
import { DateTime } from './DateTime';

export function Video(props) {
    const UpdateDateTimePretty = DateTimePretty(DateTime, props)
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <UpdateDateTimePretty/>

        </div>
    )
}