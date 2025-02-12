import moment from 'moment-jalaali';



const toPersianDate = (date) => {
    return moment(date).format('jYYYY/jMM/jDD');
};

export default toPersianDate