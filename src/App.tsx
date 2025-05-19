import s from "./App.module.css";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {fetchPhotos} from "./hooks/api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import PerPageSelector from "./components/PerPageSelector/PerPageSelector.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

export default function App() {
  const [photos, setPhotos] = useState <Photo[] | []>([]);
  const [loading, setLoading] = useState <boolean>(false);
  const [error, setError] = useState <string | null>(null);
  const [searchParams, setSearchParams] = useState <FetchPhotoParams>({
    query: "",
    page: 1,
    perPage: 10,
  });
  const [selectedPhoto, setSelectedPhoto] = useState <null | Photo>(null);
  const closeModal = () => setSelectedPhoto(null);

  useEffect(() => {
    const { query, page, perPage } = searchParams;
    if (!query) return;
    const abortController = new AbortController();
    const getPhotos = async () => {
      try {
        setLoading(true);
        const data = await fetchPhotos({query, page, perPage, signal: abortController.signal});
        setPhotos(prev => page === 1 ? data : [...prev, ...data]);
      } catch (error) {
        toast.error('Try again later...');
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    getPhotos();

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

  const onSubmit = (query : string) => {
    toast.success(`Query changed to ${query}`);
    setSearchParams({
      query: query,
      page: 1,
      perPage: 10,
    });
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setSearchParams(prev => ({
      ...prev,
      page: prev.page + 1
    }));


  };
  const handlePerPage = (perPage :number) => {
    setSearchParams(prev => ({
      ...prev, perPage, page: 1,
    }));

  };
  const handleSelectedPhoto = (select: Photo) =>  {
    setSelectedPhoto(select)
  };

  return (
      <div className={s.main}>
        <SearchBar onSubmit={onSubmit}/>
        {loading && <Loader/>}
        {error && <ErrorMessage err={error}/>}
        {photos.length > 0 && !loading && !error && (
            <>
              <PerPageSelector perPage={searchParams.perPage} onChange={handlePerPage}/>
              <ImageGallery photos={photos} onSelect={handleSelectedPhoto}/>
              <LoadMoreBtn onClick={handleLoadMore}/>
            </>

        )}
        {selectedPhoto && (
            <ImageModal photo={selectedPhoto} onClose={closeModal} />
        )}
      </div>
  )
}
