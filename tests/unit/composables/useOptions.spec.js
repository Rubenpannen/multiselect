import { createSelect, getValue, destroy } from 'unit-test-helpers'
import { nextTick } from 'composition-api'
import flushPromises from 'flush-promises'

jest.useFakeTimers()

describe('useOptions', () => {
  describe('filteredOptions', () => {
    it('should be an empty array of options not defined', () => {
      let select = createSelect()

      expect(select.vm.filteredOptions).toStrictEqual([])
    })

    it('should be and empty array if resolved options has no value', async () => {
      let select = createSelect({
        options: async () => {
          return new Promise((resolve, reject) => {
            resolve(false)
          })
        }
      })

      await flushPromises()

      expect(select.vm.filteredOptions).toStrictEqual([])
    })

    it('should be an array of objects if items is a plain array', () => {
      let select = createSelect({
        options: [1,2,3],
        trackBy: 'a',
        label: 'b',
      })

      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, a: 1, b: 1 },
        { value: 1, a: 2, b: 2 },
        { value: 2, a: 3, b: 3 },
      ])
    })

    it('should be an array of objects if items is a plain object', () => {
      let select = createSelect({
        options: {
          0: 1,
          1: 2,
          2: 3,
        },
        trackBy: 'a',
        label: 'b',
      })

      expect(select.vm.filteredOptions).toStrictEqual([
        { value: '0', a: 1, b: 1 },
        { value: '1', a: 2, b: 2 },
        { value: '2', a: 3, b: 3 },
      ])
    })

    it('should append createdTag to `filteredOptions` when createTag true', () => {
      const select = createSelect({
        mode: 'tags',
        createTag: true,
        value: [],
      })

      select.vm.search = 'new-tag'

      expect(select.vm.filteredOptions[0].value).toStrictEqual('new-tag')
    })

    it('should not append createdTag to `filteredOptions` when if it already exists exists', () => {
      const select = createSelect({
        mode: 'tags',
        createTag: true,
        options: [
          'tag1', 'tag2', 'tag3'
        ],
        value: [],
      })

      select.vm.search = 'tag2'

      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 1, label: 'tag2' }
      ])
    })

    it('should contain only options with normalized trackBys that match normalized search', () => {
      const select = createSelect({
        options: [
          { value: 0, name: 'Value0', },
          { value: 1, name: 'Value1', },
          { value: 2, name: 'Value2', }
        ],
        trackBy: 'name',
        label: 'name',
      })

      select.vm.search = 'VALUE1'

      expect(select.vm.filteredOptions.length).toBe(1)
      expect(select.vm.filteredOptions[0].name).toBe('Value1')
    })

    it('should hide selected tags when hideSelected is true', async () => {
      const select = createSelect({
        mode: 'tags',
        hideSelected: true,
        options: [1,2,3],
      })

      select.vm.select(1)

      await nextTick()

      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, label: 1 },
        { value: 2, label: 3 },
      ])
    })

    it('should limit options', () => {
      const select = createSelect({
        options: [1,2,3,4,5],
        limit: 3,
      })

      expect(select.vm.filteredOptions.length).toBe(3)
      expect(select.vm.filteredOptions[0].label).toBe(1)
      expect(select.vm.filteredOptions[1].label).toBe(2)
      expect(select.vm.filteredOptions[2].label).toBe(3)
    })
  })

  describe('hasSelected', () => {
    it('should true if has value when single', () => {
      let select = createSelect({
        value: null,
      })
      expect(select.vm.hasSelected).toBe(false)

      select = createSelect({
        value: undefined,
      })
      expect(select.vm.hasSelected).toBe(false)

      select = createSelect({
        value: 0,
        options: [1,2,3],
      })
      expect(select.vm.hasSelected).toBe(true)

      select = createSelect({
        value: 'value',
        options: {
          value: 1,
          value2: 2,
        },
      })
      expect(select.vm.hasSelected).toBe(true)
    })

    it('should true if has value when multiple', () => {
      let select = createSelect({
        mode: 'multiple',
        value: null,
      })
      expect(select.vm.hasSelected).toBe(false)

      select = createSelect({
        mode: 'multiple',
        value: undefined,
      })
      expect(select.vm.hasSelected).toBe(false)

      select = createSelect({
        mode: 'multiple',
        value: [0],
        options: [1,2,3],
      })
      expect(select.vm.hasSelected).toBe(true)

      select = createSelect({
        mode: 'multiple',
        value: ['value'],
        options: {
          value: 1,
          value2: 2,
        },
      })
      expect(select.vm.hasSelected).toBe(true)
    })

    it('should true if has value when tags', () => {
      let select = createSelect({
        mode: 'tags',
        value: null,
      })
      expect(select.vm.hasSelected).toBe(false)

      select = createSelect({
        mode: 'tags',
        value: undefined,
      })
      expect(select.vm.hasSelected).toBe(false)

      select = createSelect({
        mode: 'tags',
        value: [0],
        options: [1,2,3],
      })
      expect(select.vm.hasSelected).toBe(true)

      select = createSelect({
        mode: 'tags',
        value: ['value'],
        options: {
          value: 1,
          value2: 2,
        },
      })
      expect(select.vm.hasSelected).toBe(true)
    })
  })

  describe('multipleLabelText', () => {
    it('should be default text with one or more options selected', () => {
      let select = createSelect({
        mode: 'multiple',
        value: [0],
        options: [1,2,3]
      })
      expect(select.vm.multipleLabelText).toStrictEqual('1 option selected')

      select = createSelect({
        mode: 'multiple',
        value: [0,2],
        options: [1,2,3]
      })
      expect(select.vm.multipleLabelText).toStrictEqual('2 options selected')
    })

    it('should be custom text with one or more options selected', () => {
      let select = createSelect({
        mode: 'multiple',
        value: [0],
        options: [1,2,3],
        multipleLabel: val => val.length + ' selected',
      })
      expect(select.vm.multipleLabelText).toStrictEqual('1 selected')

      select = createSelect({
        mode: 'multiple',
        value: [0,2],
        options: [1,2,3],
        multipleLabel: val => val.length + ' selected',
      })
      expect(select.vm.multipleLabelText).toStrictEqual('2 selected')
    })
  })

  describe('noOptions', () => {
    it('should be true if no options provided', () => {
      let select = createSelect()
      expect(select.vm.noOptions).toBe(true)

      select = createSelect({
        options: [1,2,3],
      })
      expect(select.vm.noOptions).toBe(false)
    })
  })

  describe('noResults', () => {
    it('should be true if no options match search', () => {
      let select = createSelect({
        options: ['Java', 'Javascript']
      })
      select.vm.search = 'jav'
      expect(select.vm.noResults).toBe(false)

      select.vm.search = 'type'
      expect(select.vm.noResults).toBe(true)
    })
  })

  describe('select', () => {
    it('should update value on select when using single with object false', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: null
      })

      select.vm.select({ value: 0, label: 1 })

      await nextTick()

      expect(getValue(select)).toBe(0)
    })

    it('should update value on select when using single with object true', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: null,
        object: true,
      })

      select.vm.select({ value: 0, label: 1 })

      await nextTick()

      expect(getValue(select)).toStrictEqual({ value: 0, label: 1 })
    })

    it('should update value on select when using multiple with object false', async () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: null
      })

      select.vm.select({ value: 0, label: 1 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0])
    })

    it('should update value on select when using multiple with object true', async () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: null,
        object: true
      })

      select.vm.select({ value: 0, label: 1 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([{ value: 0, label: 1 }])
    })

    it('should update value on select when using multiple with when value is null', async () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: null,
      })

      select.vm.update(null)

      select.vm.select({ value: 0, label: 1 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0])
    })

    it('should update value when providing a plain value', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: null
      })

      select.vm.select(1)

      await nextTick()

      expect(getValue(select)).toBe(1)
    })

    it('should emit select with value when object false', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: 1,
      })

      select.vm.select({ value: 1, label: 2 })

      expect(select.emitted('select')[0][0]).toStrictEqual(1)
    })

    it('should emit select with value when object true', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: 1,
        object: true,
      })

      select.vm.select({ value: 1, label: 2 })

      expect(select.emitted('select')[0][0]).toStrictEqual({ value: 1, label: 2 })
    })
  })

  describe('deselect', () => {
    it('should clear value when deselect single', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: 1
      })

      select.vm.deselect({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual(null)
    })

    it('should remove value when deselect multiple and object false', async () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: [1,2],
      })

      select.vm.deselect({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([2])
    })

    it('should remove value when deselect multiple and object true', async () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: [{ value: 1, label: 2 }, { value: 2, label: 3 }],
        object: true,
      })

      select.vm.deselect({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([{ value: 2, label: 3 }])
    })

    it('should remove value when deselect multiple by providing value', async () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: [1,2],
      })

      select.vm.deselect(1)

      await nextTick()

      expect(getValue(select)).toStrictEqual([2])
    })

    it('should emit deselect with value when object false', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: 1,
      })

      select.vm.deselect({ value: 1, label: 2 })

      expect(select.emitted('deselect')[0][0]).toStrictEqual(1)
    })

    it('should emit deselect with value when object true', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: 1,
        object: true,
      })

      select.vm.deselect({ value: 1, label: 2 })

      expect(select.emitted('deselect')[0][0]).toStrictEqual({ value: 1, label: 2 })
    })
  })

  describe('remove', () => {
    it('should deselect on remove', async () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: [1,2],
      })

      select.vm.remove(1)

      await nextTick()

      expect(getValue(select)).toStrictEqual([2])
    })
  })

  describe('clear', () => {
    it('should set value to null on clear when single', async () => {
      let select = createSelect({
        options: [1,2,3],
        value: 1,
      })

      select.vm.clear()

      await nextTick()

      expect(getValue(select)).toStrictEqual(null)
    })

    it('should set value to [] on clear when multiple', async () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: [1,2],
      })

      select.vm.clear()

      await nextTick()

      expect(getValue(select)).toStrictEqual([])
    })
  })

  describe('isSelected', () => {
    it('should be true if value equals option value when object false and single', () => {
      let select = createSelect({
        options: [1,2,3],
        value: 1,
      })

      expect(select.vm.isSelected({ value: 1, label: 2 })).toBe(true)
      expect(select.vm.isSelected({ value: 2, label: 3 })).toBe(false)
    })

    it('should be true if value object equals option when object true and single', () => {
      let select = createSelect({
        options: [1,2,3],
        value: { value: 1, label: 2 },
        object: true,
      })

      expect(select.vm.isSelected({ value: 1, label: 2 })).toBe(true)
      expect(select.vm.isSelected({ value: 2, label: 3 })).toBe(false)
    })

    it('should be true if option value is in value when object false and multiple', () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: [0,1],
      })

      expect(select.vm.isSelected({ value: 1, label: 2 })).toBe(true)
      expect(select.vm.isSelected({ value: 2, label: 3 })).toBe(false)
    })

    it('should be true if option is in value when object true and multiple', () => {
      let select = createSelect({
        mode: 'multiple',
        options: [1,2,3],
        value: [
          { value: 0, label: 1 },
          { value: 1, label: 2 },
        ],
        object: true,
      })

      expect(select.vm.isSelected({ value: 1, label: 2 })).toBe(true)
      expect(select.vm.isSelected({ value: 2, label: 3 })).toBe(false)
    })
  })

  describe('handleOptionClick', () => {
    /* SINGLE */

    it('should select option as value if not selected when single', async () => {
      let select = createSelect({
        value: 0,
        options: [1,2,3],
      }, {
        attach: true,
      })

      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual(1)

      destroy(select)
    })

    it('should deselect option if selected when single', async () => {
      let select = createSelect({
        value: 1,
        options: [1,2,3],
      }, {
        attach: true,
      })

      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual(null)

      destroy(select)
    })

    /* MULTISELECT */

    it('should remove option from value if selected when multiple', async () => {
      let select = createSelect({
        mode: 'multiple',
        value: [0,1],
        options: [1,2,3],
      })

      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0])
    })

    it('should not clear search on deselect when multiple', async () => {
      let select = createSelect({
        mode: 'multiple',
        value: [0,1],
        options: [1,2,3],
      })

      select.vm.search = 'value'
      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(select.vm.search).toBe('value')
      expect(getValue(select)).toStrictEqual([0])
    })

    it('should add option to value if not selected when multiple', async () => {
      let select = createSelect({
        mode: 'multiple',
        value: [0],
        options: [1,2,3],
      })

      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0,1])
    })

    it('should clear search after select when multiple', async () => {
      let select = createSelect({
        mode: 'multiple',
        value: [0],
        options: [1,2,3],
      })

      select.vm.search = 'value'
      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0,1])
      expect(select.vm.search).toBe('')
    })

    it('should not clear search after select when multiple and clearOnSelect is false', async () => {
      let select = createSelect({
        mode: 'multiple',
        value: [0],
        options: [1,2,3],
        clearOnSelect: false,
      })

      select.vm.search = 'value'
      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0,1])
      expect(select.vm.search).toBe('value')
    })

    /* TAGS */

    it('should remove option from value if selected when tags', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [0,1],
        options: [1,2,3],
      })

      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0])
    })

    it('should not clear search on deselect when tags', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [0,1],
        options: [1,2,3],
      })

      select.vm.search = 'value'
      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(select.vm.search).toBe('value')
      expect(getValue(select)).toStrictEqual([0])
    })

    it('should add option to value if not selected when tags', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [0],
        options: [1,2,3],
      })

      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0,1])
    })

    it('should not clear search after select when tags if clearOnSelect is false', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [0],
        options: [1,2,3],
        clearOnSelect: false,
      })

      select.vm.search = 'value'
      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0,1])
      expect(select.vm.search).toBe('value')
    })

    it('should clear search after select when tags if clearOnSelect is true', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [0],
        options: [1,2,3],
        clearOnSelect: true,
      })

      select.vm.search = 'value'
      select.vm.handleOptionClick({ value: 1, label: 2 })

      await nextTick()

      expect(getValue(select)).toStrictEqual([0,1])
      expect(select.vm.search).toBe('')
    })

    it('should emit tag and clear search and not append tag on select if createTag true and option does not exist', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [],
        options: [1,2,3],
        createTag: true,
        appendNewTag: false,
        object: true,
      })

      select.vm.search = 'value'
      select.vm.handleOptionClick({ value: 'value', label: 'value' })

      await nextTick()

      expect(select.emitted('tag')[0][0]).toStrictEqual('value')
      expect(select.vm.search).toBe('')
      expect(select.vm.filteredOptions.length).toBe(3)
    })

    it('should append option if createTag && appendNewTag true and option does not exist', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [],
        options: [1,2,3],
        createTag: true,
        appendNewTag: true,
        hideSelected: false,
      })

      select.vm.handleOptionClick({ value: 'value', label: 'value' })

      await nextTick()

      expect(select.emitted('tag')[0][0]).toStrictEqual('value')
      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, label: 1 },
        { value: 1, label: 2 },
        { value: 2, label: 3 },
        { value: 'value', label: 'value' },
      ])
    })

    it('should not append option if it already exists', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [],
        options: [1,2,3],
        createTag: true,
        appendNewTag: true,
        hideSelected: false,
      })

      select.vm.handleOptionClick({ value: 'value', label: 'value' })

      await nextTick()

      select.vm.handleOptionClick({ value: 'value', label: 'value' })

      await nextTick()
      
      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, label: 1 },
        { value: 1, label: 2 },
        { value: 2, label: 3 },
        { value: 'value', label: 'value' },
      ])
    })

    it('should not append option if appendNewTag is false', async () => {
      let select = createSelect({
        mode: 'tags',
        value: [],
        options: [1,2,3],
        createTag: true,
        appendNewTag: false,
        hideSelected: false,
        object: true,
      })

      select.vm.handleOptionClick({ value: 'value', label: 'value' })

      await nextTick()
      
      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, label: 1 },
        { value: 1, label: 2 },
        { value: 2, label: 3 },
      ])
    })
  })

  describe('getOption', () => {
    it('should return option by value', () => {
      let select = createSelect({
        options: [1,2,3],
      })

      expect(select.vm.getOption(2)).toStrictEqual({ value: 2, label: 3 })
    })
  })

  describe('onCreated', () => {
    it('should throw error if initial value is not empty or an array when multiple', () => {
      const originalConsoleError = console.error
      const originalConsoleWarn = console.warn
      console.error = () => {}
      console.warn = () => {}

      expect(() => {
        createSelect({
          mode: 'multiple',
          options: [1,2,3],
          value: 1,
        })
      }).toThrowError()

      console.error = originalConsoleError
      console.warn = originalConsoleWarn
    })

    it('should resolve async options', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
      })
  
      await flushPromises()

      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, label: 1 },
        { value: 1, label: 2 },
        { value: 2, label: 3 },
      ])
    })

    it('should not resolve async options if resolveOnLoad is value', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
        resolveOnLoad: false
      })
  
      await flushPromises()

      expect(select.vm.filteredOptions).toStrictEqual([])
    })

    it('should be busy when resolving async options', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
      })

      expect(select.vm.busy).toBe(true)

      await flushPromises()

      expect(select.vm.busy).toBe(false)
    })

    it('should not update async option list when search changes if delay is -1', async () => {
      let asyncOptionsMock = jest.fn()

      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            asyncOptionsMock()
            resolve([1,2,3])
          })
        },
        delay: -1
      })

      await flushPromises()

      expect(asyncOptionsMock).toHaveBeenCalledTimes(1)

      select.vm.search = 'value'

      await flushPromises()

      expect(asyncOptionsMock).toHaveBeenCalledTimes(1)
    })


    it('should update async option list', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
        delay: 10,
        filterResults: false,
      })

      await flushPromises()

      select.vm.$parent.props.options = async () => {
        return await new Promise((resolve, reject) => {
          resolve([4,5,6])
        })
      }

      await nextTick()

      select.vm.search = 'val'

      jest.runAllTimers()

      await flushPromises()
      
      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, label: 4 },
        { value: 1, label: 5 },
        { value: 2, label: 6 },
      ])
    })

    it('should not resolve async options when search changes if query is not equal to search value when delay has passed', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
        delay: 10,
        filterResults: false,
      })

      await flushPromises()

      select.vm.$parent.props.options = async () => {
        return await new Promise((resolve, reject) => {
          resolve([4,5,6])
        })
      }

      await nextTick()

      select.vm.search = 'val'

      jest.advanceTimersByTime(5)

      select.vm.search = 'val2'

      jest.advanceTimersByTime(5)

      await flushPromises()
      
      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, label: 1 },
        { value: 1, label: 2 },
        { value: 2, label: 3 },
      ])
    })

    it('should not update async option list when search changes during async request', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
        delay: 10,
        filterResults: false,
      })

      await flushPromises()

      select.vm.$parent.props.options = async () => {
        return await new Promise((resolve, reject) => {
          resolve([4,5,6])
        })
      }

      await nextTick()

      select.vm.search = 'val'

      jest.runAllTimers()

      select.vm.search = 'val2'

      await flushPromises()
      
      expect(select.vm.filteredOptions).toStrictEqual([
        { value: 0, label: 1 },
        { value: 1, label: 2 },
        { value: 2, label: 3 },
      ])
    })

    it('should not update async option list when search changes to less chars than minChars', async () => {
      let asyncOptionsMock = jest.fn()

      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            asyncOptionsMock()
            resolve([1,2,3])
          })
        },
        delay: 0,
        minChars: 3
      })

      await flushPromises()

      expect(asyncOptionsMock).toHaveBeenCalledTimes(1)

      select.vm.search = 'va'

      jest.runAllTimers()

      await flushPromises()

      expect(asyncOptionsMock).toHaveBeenCalledTimes(1)
    })

    it('should not update async option list when search changes to >= chars than minChars', async () => {
      let asyncOptionsMock = jest.fn()

      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            asyncOptionsMock()
            resolve([1,2,3])
          })
        },
        delay: 0,
        minChars: 3
      })

      await flushPromises()

      expect(asyncOptionsMock).toHaveBeenCalledTimes(1)

      select.vm.search = 'val'

      jest.runAllTimers()

      await flushPromises()

      expect(asyncOptionsMock).toHaveBeenCalledTimes(2)
    })

    it('should clear options before updating async options if clearOnSearch is true', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
        delay: 0,
        clearOnSearch: true,
        filterResults: false,
      })

      await flushPromises()

      select.vm.search = 'val'

      expect(select.vm.filteredOptions.length).toBe(0)
    })

    it('should not clear options before updating async options if clearOnSearch is false', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
        delay: 0,
        clearOnSearch: false,
        filterResults: false,
      })

      await flushPromises()

      select.vm.search = 'val'

      expect(select.vm.filteredOptions.length).toBe(3)
    })

    it('should be busy when resolve new async options', async () => {
      let select = createSelect({
        options: async () => {
          return await new Promise((resolve, reject) => {
            resolve([1,2,3])
          })
        },
        delay: 1,
      })

      await flushPromises()

      select.vm.search = 'val'

      jest.runAllTimers()

      expect(select.vm.busy).toBe(true)

      await flushPromises()

      expect(select.vm.busy).toBe(false)
    })
  })
})