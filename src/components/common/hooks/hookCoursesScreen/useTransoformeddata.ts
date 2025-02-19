import { useMemo } from 'react';

type Technology = {
  id: number;
  name: string;
  describe: string;
  value: string;
};

interface Type {
  id: number;
  typeName: string;
  name: string;
}

interface Level {
  id: number;
  levelName: string;
  name: string;
}

interface FilterItem {
  id: number;
  label: string;
  items: { id: string; name: string }[] | null;
  height: string;
}

const useTransformedData = (
  technologyData: Technology[],
  typeData: Type[],
  levelData: Level[]
): FilterItem[] => {
  return [
    {
      id: 1,
      label: "تکنولوژی",
      items: technologyData ? technologyData.map((item) => ({ name: item.describe, id: `tech-${item.id}` })) : [],
      height: "173px",
    },
    {
      id: 2,
      label: "وضعیت",
      items: typeData ? typeData.map((item) => ({ name: item.typeName, id: `type-${item.id}` })) : [],
      height: "128px",
    },
    {
      id: 3,
      label: "سطح",
      items: levelData ? levelData.map((item) => ({ name: item.levelName, id: `level-${item.id}` })) : [],
      height: "123px",
    },
    {
      id: 4,
      label: "قیمت",
      items: null,
      height: "123px",
    },
  ];
};

export default useTransformedData;
