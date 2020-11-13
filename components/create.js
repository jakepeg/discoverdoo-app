import { useState } from 'react'
import { useRouter } from 'next/router'
import { createActivity, CATEGORY_OPTIONS, MEDIUM_OPTIONS } from '../actions'
import Cookies from 'js-cookie'
import Select from 'react-select'

const selectStyles = {
  menu: () => ({
    width: 300,
    border: '1px solid #999',
    color: '#000000',
    padding: 12,
    marginBottom: 15
  }),

  control: () => ({
    width: 300,
  }),

  indicatorsContainer: () => ({
    display: 'none',
  }),
}

const Create = (props) => {

  const router = useRouter()

  const defaultData = {
    name: '',
    description: '',
    image: '',
    ageFrom: '',
    ageTo: '',
    price: '',
    website: '',
    userId: Cookies.get('sub')
  }

  const formData = props.initialData ? {...props.initialData} : defaultData
  const [form, setForm] = useState(formData)

  const [nameError, setNameError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [ageFromError, setAgeFromError] = useState(false)
  const [ageToError, setAgeToError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [websiteError, setWebsiteError] = useState(false)
  const [categoryError, setCategoryError] = useState(false)
  const [mediumError, setMediumError] = useState(false)

  const validate = () => {
    if (!form.name) {
      setNameError(true)
      return false
    }
    if (!form.ageFrom) {
      setAgeFromError(true)
      return false
    }
    if (!form.ageTo) {
      setAgeToError(true)
      return false
    }
    if (!form.price) {
      setPriceError(true)
      return false
    }
    if (!form.website) {
      setWebsiteError(true)
      return false
    }
    if (!form.image) {
      setImageError(true)
      return false
    }
    if (!form.description) {
      setDescriptionError(true)
      return false
    }
    if (!form.category) {
      setCategoryError(true)
      return false
    }
    if (!form.medium) {
      setMediumError(true)
      return false
    }
    return true
  }

  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    setForm({
      ...form,
      [name]: target.value
    })
  }

  const handleWebsiteChange = (event) => {
    const target = event.target
    const name = target.name
    const cleanWebsite = target.value.replace('https://','').replace('http://','');
    console.log(target)
    setForm({
      ...form,
      [name]: cleanWebsite
    })
  }

  const handleCategoryChange = (e) => {
    let value = []
    if (e != null) {
      value = Array.from(e, option => option.value);
    } else {
      value = []
    }
    setForm({
      ...form,
      category: value.toString()
    })
  }

  const handleMediumChange = (e) => {
    let value = []
    if (e != null) {
      value = Array.from(e, option => option.value);
      console.log(form.category)
    } else {
      value = []
    }

    setForm({
      ...form,
      medium: value.toString()
    })
  }

  const submitForm = () => {
    const isValid = validate()
    if (isValid) {
      createActivity({...form}).then(() => {
        router.push('/my-activities')
      })
    }
  }

  const [image, setImage] = useState('doozone/tzgl9kjalula4brx0irl.png')
  const [loading, setLoading] = useState(false)
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'doozone')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/jakepeg/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    const newFileName = file.public_id + '.' + file.format
    setImage(newFileName)
    setLoading(false)
    setForm({
      ...form,
      image: newFileName
    })
  }

  return (
  <>
    <div className="contain top-space">
      <div className="details-card">
        <div className="card-header">
          <a href="/" id="back-btn">
            <img id="arrow-left" src="/arrow-left.svg" alt="Go Back" /> 
            <span className="back">BACK</span>
          </a>
        </div>
        <div className="form-card-content">
        <h1>Add an activity</h1>
    <form>
    <div className="add-activity-form">
      <div className="form-col">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          value={form.name}
          onChange={handleChange}
          type="text" 
          className="form-control" 
          id="name" 
          name="name" 
          required
          aria-describedby="emailHelp" 
          placeholder="Activity name" />
          { nameError ? (
            <div className="form-error">enter a name</div>
          ) : null }
        </div>
        <div className="form-group">
          <label htmlFor="ageFrom">Age from</label>
          <input 
          onChange={handleChange}
          value={form.ageFrom}
          type="number" 
          className="form-control" 
          id="ageFrom" 
          name="ageFrom" 
          required
          placeholder="age from" />
          { ageFromError ? (
            <div className="form-error">enter age from</div>
          ) : null }
        </div>
        <div className="form-group">
          <label htmlFor="ageTo">Age to</label>
          <input 
          onChange={handleChange}
          value={form.ageTo}
          type="number" 
          className="form-control" 
          id="ageTo" 
          name="ageTo" 
          required
          placeholder="age to" />
          { ageToError ? (
            <div className="form-error">enter age to</div>
          ) : null }
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input 
          onChange={handleChange}
          value={form.price}
          type="text" 
          className="form-control" 
          id="price" 
          name="price" 
          required
          placeholder="Price" />
          { priceError ? (
            <div className="form-error">enter a price</div>
          ) : null }
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input 
          onChange={handleWebsiteChange}
          value={form.website}
          type="text" 
          className="form-control" 
          id="website" 
          name="website" 
          required
          placeholder="Website" />
          { websiteError ? (
            <div className="form-error">enter website</div>
          ) : null }
        </div>
        <div className="form-group">
          <label htmlFor="file">Image</label>
          <input 
            type="file"
            name="file"
            required
            placeholder="Upload an image"
            onChange={uploadImage}
          />
          { imageError ? (
            <div className="form-error">provide an image</div>
          ) : null }
          <input value={form.userId}
          type="hidden" 
          id="userId" 
          name="userId" />
        </div>
        <div className="form-group">
          {loading ? (
            <h3>LOADING IMAGE...</h3>
          ) : (
            <img src={`https://res.cloudinary.com/jakepeg/image/upload/v1593005651/${image}`} style={{width: '150px'}} />
          )}
        </div>
      </div>
      <div className="form-col">
      <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea 
          onChange={handleChange}
          value={form.description}
          className="form-control" 
          id="description" 
          name="description" 
          required
          rows="3"></textarea>
          { descriptionError ? (
            <div className="form-error">enter a description</div>
          ) : null }
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <Select
            isMulti
            menuIsOpen
            name="colors"
            options={CATEGORY_OPTIONS}
            placeholder="Select.."
            styles={selectStyles}
            classNamePrefix="select"
            onChange={handleCategoryChange}
          />
          { categoryError ? (
            <div className="form-error">select a category</div>
          ) : null }
        </div>
        <div className="form-group">
          <label htmlFor="medium">Channel</label>
          <Select
            isMulti
            menuIsOpen
            name="mediums"
            options={MEDIUM_OPTIONS}
            placeholder="Select.."
            styles={selectStyles}
            classNamePrefix="select"
            onChange={handleMediumChange}
          />
          { mediumError ? (
            <div className="form-error">select a channel</div>
          ) : null }
        </div>
      </div>
      </div>
      <button 
          onClick={submitForm} 
          type="button" 
          className="btn btn-primary">
          Add Activity
      </button>
    </form>
</div>

</div>
</div>

  <style jsx>{`
    .form-card-content {
      padding: 20px;
    }

    .add-activity-form {
      margin: 50px 50px 0 50px;
      display: flex;
    }

    @media (max-width: 1100px) {
      .add-activity-form {
        flex-direction: column;
        margin: 0;
      }
    }

    .form-col {
      flex: 1;
    }

    .form-group {
      display: flex;
    }

    .form-error {
      width: 60px;
      color: red;
      font-size: 0.7rem;
      padding: 3px 0 0 3px;
    }

    input:not([type="submit"]) {
      font-size: 1rem;
      margin-bottom: 15px;
      padding: 10px 20px;
      box-sizing: border-box;
      width: 300px;
    }

    select, textarea {
      font-size: 1rem;
      margin-bottom: 15px;
      padding: 10px 20px;
      box-sizing: border-box;
      width: 300px;
    }

    h1 {
      margin-top: -35px;
    }

    label {
      width: 120px;
    }

    button {
      margin: 25px 0 25px 50px
    }

    #description {
      height: 120px;
    }

    #category {
      height: 135px;
    }

    #medium {
      height: 40px;
    }

  `}</style>


</>
  )
}

export default Create