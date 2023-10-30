import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const getDucks = async () => {
  try {
    const getDuckEntries = await client.getEntries({
      content_type: 'duck',
    });

    console.log(getDuckEntries.items);
    return getDuckEntries.items;
  } catch (error) {
    console.error(error.message);
  }
};

export { getDucks };
