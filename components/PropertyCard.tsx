import React from "react";
import Image, { StaticImageData } from "next/image";
import { Heart } from "lucide-react";
import { formatPrice } from "@/lib/helpers";

type Property = {
  title: string;
  image: StaticImageData;
};

const PropertyCard = ({ data }: { data: Property }) => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-xl shadow-lg">
      <Image src={data.image} alt="item" priority />
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent text-white">
        <div className="absolute top-4 flex items-center justify-between w-full px-4">
          <div className="flex space-x-2">
            <div className="px-2.5 py-2 bg-blue-700 rounded-xl text-sm">
              Agentlik
            </div>
            <div className="px-2.5 py-2 bg-teal-700 rounded-xl text-sm">
              Yaşayış kompleksi
            </div>
          </div>
          <button>
            <Heart size={27} />
          </button>
        </div>

        <div className="p-4 w-full">
          <h3 className="text-2xl font-medium mb-2">
            {formatPrice(259000)} &#8380;
          </h3>
          <p>{data.title}</p>
          <div className="mt-1 flex">
            <div className="space-x-4">
              4 otaqlı * 133 m<sup>2</sup> * 11/18 mərtəbə
            </div>
          </div>
          <div className="mt-4 border-t border-t-[#ccc] pt-2.5 text-[#ccc]">
            Bakı, bugün 21:56
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
