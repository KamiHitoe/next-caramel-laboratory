
## documents design
- users collection
  - user document
    - carts sub collection
    - orders sub collection
- items collection

## fields design
- users collection
  - id: PK
  - uuid
  - user_name
  - address_number
  - address
  - email
  - created_at
  - updated_at
  - cart_items
    - items_id: FK
    - item_name
    - img_path
    - price
    - cart_counts
    - created_at
    - updated_at
  - order_items
    - items_id: FK
    - item_name
    - img_path
    - price
    - order_counts
    - created_at
    - updated_at

- items collection
  - id: PK
  - item_name: string
  - img_path: string
  - price: number
  - counts: number
  - genre: string
  - created_at: date
  - updated_at: date


