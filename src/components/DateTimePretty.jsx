import moment from 'moment';

export function DateTimePretty(Component, props) {

    const { date } = props
    const prettyDate = (date) => {
        if (moment(date, moment.ISO_8601, true).isValid()) {
            return moment(moment(date).toArray()).fromNow()
        }
        return 'some time ago'
    }
    const updateComponent = () => {
        return <Component date={prettyDate(date)} />}
    return updateComponent
}
