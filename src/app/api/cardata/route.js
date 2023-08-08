import connect from "@/utils/db";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";
import carmodel from "@/models/carmodel";

export const GET = async (request) => {
  try {
    connect();
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const make = searchParams.get("make");
    const location = searchParams.get("location");
    const model = searchParams.get("model");
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const sort = searchParams.get("sort");
    const pageNumber = parseInt(page) || 1;
    const itemsPerPage = parseInt(limit) || 10;
    const min = searchParams.get("min");
    const minPrice = parseInt(min);
    const maxPrice = searchParams.get("max");
    const year = searchParams.get("year");

    const postx = await carmodel.find();
    //search functionality
    let results = make
      ? postx.filter((product) =>
          product.make.toLowerCase().includes(make.toLowerCase())
        )
      : postx;

    results = model
      ? results.filter((product) =>
          product.model.toLowerCase().includes(model.toLowerCase())
        )
      : results;
    results = location
      ? results.filter((product) =>
          product.location.toLowerCase().includes(location.toLowerCase())
        )
      : results;

    results = minPrice
      ? results.filter((product) => minPrice < product.price)
      : results;

    results = maxPrice
      ? results.filter((product) => maxPrice > product.price)
      : results;

    //pagination functionality
    // // Calculate the starting index and ending index based on the page number and limit
    // const startIndex = (pageNumber - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;

    // // Get the products for the specified page and limit
    // results = results.slice(startIndex, endIndex);

    //results = results.slice(0, limit);

    return new NextResponse(JSON.stringify(results), { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

cloudinary.config({
  cloud_name: "dmyonrqtx",
  api_key: "119431252415451",
  api_secret: "_CirYoZS_oVeiqleThWGQ3pACm0",
  secure: true,
});

export const POST = async (request) => {
  const {
    make,
    model,
    year,
    price,
    mileage,
    city,
    transmission,
    fuelType,
    description,
    image,
    location,
    username,
    phone,
  } = await request.json();

  const x = Date.now();

  try {
    if (image) {
      console.log(image);
      let ggg = [];
      for (let i = 0; i < image.length; i++) {
        const resultImage = await cloudinary.v2.uploader.upload(image[i], {
          upload_preset: "imageGallery",
          public_id: x + i,
        });
        if (resultImage) {
          ggg.push(resultImage);
        }
      }
      console.log(ggg);

      await connect();
      const product = await new carmodel({
        make,
        model,
        year,
        price,
        mileage,
        city,
        transmission,
        fuelType,
        description,
        image: ggg,
        location,
        username,
        phone,
      });

      product.save();

      return new NextResponse(product, { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse({ message: "database error" }, { status: 500 });
  }
};
