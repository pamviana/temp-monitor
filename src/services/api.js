export const getData = () => {
  const dataValues = {
    CPU: {
      stripValues: [
        {
          title: "Temperature",
          value: 40,
          maxValue: 100,
          unitMeasure: " °C",
          id: "temperature" + "CPU" + "strip",
        },
        {
          title: "Clock rate",
          value: 3600,
          maxValue: 5200,
          unitMeasure: " MHz",
          id: "clockrate" + "CPU" + "strip",
        },
      ],
      componentName: "Intel Core i5 13600K",
      load: {
        currVal: 2,
        total: 100
      }
    },
    GPU: {
      stripValues: [
        {
          title: "Temperature",
          value: 37,
          maxValue: 100,
          unitMeasure: " °C",
          id: "temperature" + "GPU" + "strip",
        },
        {
          title: "Clock rate",
          value: 210,
          maxValue: 2850,
          unitMeasure: " MHz",
          id: "clockrate" + "GPU" + "strip",
        },
      ],
      componentName: "NVIDIA GeForce RTX 4070",
      load: {
        currVal: 99,
        total: 100
      }
    },
    RAM: {
      currStorage: 194,
      totalStorage: 930,
    },
  };

  return dataValues;
};

export const getRAMdata = () => {
  return {
    used: 14.9,
    total: 31.7,
  };
};

export const getStorageData = () => {
  return {
    used: 194,
    total: 930,
  };
};
