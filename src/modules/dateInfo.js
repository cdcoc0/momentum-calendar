const INCREASEMONTH = 'dateInfo/INCREASEMONTH';
const DECREASEMONTH = 'dateInfo/DECREASEMONTH';
const ONDATECLICK = 'dateInfo/ONDATECLICK';

export const increaseMonth = () => ({type: INCREASEMONTH});
export const decreaseMonth = () => ({type: DECREASEMONTH});
export const onDateClick = p => ({type: ONDATECLICK, p});

const date = new Date();
const getPrevLast = (y, m) => {
    return new Date(y, m, 0);
};
const getThisLast = (y, m) => {
    return new Date(y, m + 1, 0);
};

const initialState = {
    year: date.getFullYear(),
    month: date.getMonth(),
    initDate: date.getDate(),
    prevLast: getPrevLast(date.getFullYear(), date.getMonth()),
    thisLast: getThisLast(date.getFullYear(), date.getMonth()),
    today: {year: date.getFullYear(), month: date.getMonth(), date: date.getDate()}
};

function dateInfo(state = initialState, action) {
    switch(action.type) {
        case INCREASEMONTH:
            date.setMonth(date.getMonth() + 1);
            return {
                ...state,
                year: date.getFullYear(),
                month: date.getMonth(),
                prevLast: getPrevLast(date.getFullYear(), date.getMonth()),
                thisLast: getThisLast(date.getFullYear(), date.getMonth())
            };
        case DECREASEMONTH:
            date.setMonth(date.getMonth() - 1);
            return {
                ...state,
                year: date.getFullYear(),
                month: date.getMonth(),
                prevLast: getPrevLast(date.getFullYear(), date.getMonth()),
                thisLast: getThisLast(date.getFullYear(), date.getMonth())
            }
        case ONDATECLICK:
            return {
                ...state,
                today: {
                    year: state.year,
                    month: state.month,
                    date: action.p
                }
            }
        default:
            return state;
    }
}

export default dateInfo;