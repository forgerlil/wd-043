import { useState, useEffect } from 'react';
import { Product } from '../components';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const [categories, setCategories] = useState(null);
  const { products } = useAppContext();

  useEffect(() => {
    products &&
      setCategories(
        products.reduce((acc, curr) => {
          !acc.includes(curr.category) && acc.push(curr.category);
          return acc;
        }, [])
      );
  }, [products]);

  return (
    <main>
      <img
        className='bg-[#0f256e] h-96 object-contain object-center w-full'
        src='https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1154082/retina_500x200_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
        alt='Context logo'
      />
      <div className='max-w-[1580px] mx-auto'>
        <nav className='my-10 flex justify-center'>
          <ul className='join'>
            {categories &&
              categories.map((category) => (
                <li
                  key={crypto.randomUUID()}
                  onClick={() =>
                    alert(
                      "Nothing here. This isn't a real website after all :)"
                    )
                  }
                >
                  <button className='btn btn-secondary join-item'>
                    {category[0].toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
        <div className={`flex ${products ? '' : 'justify-between'}`}>
          <aside className='min-w-fit flex h-fit'>
            <nav>
              <ul className='menu bg-base-300 rounded-box'>
                <li>
                  <h3 className='menu-title text-2xl font-light'>Read more</h3>
                  <ul>
                    <li>
                      <a
                        className='text-lg font-light'
                        href='https://www.linkedin.com/pulse/understanding-state-management-front-end-paradigm-jitendrasinh-gohil/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        State Management
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-lg font-light'
                        href='https://reactjs.org/docs/context.html#gatsby-focus-wrapper'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Context Docs
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-lg font-light'
                        href='https://beta.reactjs.org/learn/passing-data-deeply-with-context'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Passing Data Deeply with Context
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-lg font-light'
                        href='https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Scaling Up with Reducer and Context
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-lg font-light'
                        href='https://beta.reactjs.org/reference/react/useReducer#usage'
                        target='_blank'
                        rel='noreferrer'
                      >
                        useReducer Docs
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-lg font-light'
                        href='https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer'
                        target='_blank'
                        rel='noreferrer'
                      >
                        useState vs useReducer
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-lg font-light'
                        href='https://redux.js.org/introduction/getting-started'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Redux
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-lg font-light'
                        href='https://www.geeksforgeeks.org/whats-the-difference-between-usecontext-and-redux/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Context vs Redux
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
          <section
            className={`flex flex-wrap gap-x-6 gap-y-10 ml-6 ${
              products ? '' : 'flex-1'
            }`}
          >
            {products ? (
              products.map((product) => (
                <Product key={crypto.randomUUID()} product={product} />
              ))
            ) : (
              <span className='loading loading-spinner w-32 block mx-auto mt-20 mb-72'></span>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
