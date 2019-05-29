import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles({
  grid: {
    width: '60%',
  },
});

function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const classes = useStyles();

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <KeyboardDatePicker
          margin="normal"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
    />
  );
}

export default MaterialUIPickers;