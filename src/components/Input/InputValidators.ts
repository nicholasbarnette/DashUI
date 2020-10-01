export const InputValidator = (
	type: 'email' | 'password' | 'date' | 'time',
) => {
	switch (type) {
		case 'email':
			return (data: string) => {
				return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
					data,
				);
			};
		case 'password':
			return (data: string) => {
				// Password rules
				// At least one digit [0-9]
				// At least one lowercase character [a-z]
				// At least one uppercase character [A-Z]
				// At least one special character [*.!@#$%^&(){}[]:;<>,.?/~_+-=|\]
				// At least 8 characters in length, but no more than 32.
				return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}\[\]:;<>,.?/~_+\-=|\\]).{8,32}$/.test(
					data,
				);
			};
		case 'date':
			const validate_date = (date: string) => {
				// Checks for mm/dd/yyyy format
				if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) return false;

				// Parse the date components
				let parts = date.split('/');
				let day = parseInt(parts[1], 10);
				let month = parseInt(parts[0], 10);
				let year = parseInt(parts[2], 10);

				// Check the ranges of month and year
				if (year < 1000 || year > 3000 || month === 0 || month > 12)
					return false;

				let monthLength = [
					31,
					28,
					31,
					30,
					31,
					30,
					31,
					31,
					30,
					31,
					30,
					31,
				];

				// Adjust for leap years
				if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
					monthLength[1] = 29;

				// Check the range of the day
				return day > 0 && day <= monthLength[month - 1];
			};
			return (data: string) => {
				return validate_date(data);
			};
		case 'time':
			return (data: string) => {
				return true;
			};
		default:
			return (data: string) => {
				return true;
			};
	}
};
