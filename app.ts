(() => {
	const sumar = (a: number, b: number): number => {
		return a + b;
	};

	const nombre = (): string => {
		return 'Hola Diego';
	};

	const obtenerSalario = (): Promise<string> => {
		return new Promise((resolve, reject) => {
			resolve('Diego');
			reject('Nooo');
		});
	};

	obtenerSalario()
		.then((a) => console.log(a))
		.catch((a) => {
			console.log(a);
		});
})();
