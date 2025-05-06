{
  // nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };

  searchName(null);

  // unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    }

    if (typeof value === "string") {
      const [speedNumber, unit] = value.split(" ");
      console.log(speedNumber);
      const convertedSpeed = (parseFloat(speedNumber) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    } else {
      console.log("Wrong input");
    }
  };

  // getSpeedInMeterPerSecond(1000);
  //   getSpeedInMeterPerSecond(`1000 km/h`);
  getSpeedInMeterPerSecond(null);

  // Never type
  const throwError = (msg: string) => {
    throw new Error(msg);
  };
  throwError("error occurred");
  //
}
