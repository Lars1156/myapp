import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery
} from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';

// Sample vendor data
const vendorData = [
  {
    vendorName: 'John Doe',
    companyName: 'Tech Solutions Inc.',
    mobileNo: '+1234567890',
    project: 'Green Valley Residency',
  },
  {
    vendorName: 'Jane Smith',
    companyName: 'Innovate Corp.',
    mobileNo: '+9876543210',
    project: 'Sunny Meadows Apartments',
  },
  {
    vendorName: 'Mike Johnson',
    companyName: 'BuildTech Ltd.',
    mobileNo: '+1122334455',
    project: 'Blue Sky Villas',
  },
  {
    vendorName: 'Emily Davis',
    companyName: 'Green Energy Co.',
    mobileNo: '+9988776655',
    project: 'Harmony Heights',
  },
  {
    vendorName: 'Chris Brown',
    companyName: 'Urban Designers',
    mobileNo: '+8899776655',
    project: 'Silver Oak Residency',
  },
  {
    vendorName: 'Lisa Taylor',
    companyName: 'Smart Builders',
    mobileNo: '+7766554433',
    project: 'Golden Sunrise Apartments',
  },
  {
    vendorName: 'Robert Wilson',
    companyName: 'Elite Constructions',
    mobileNo: '+6677889900',
    project: 'Crystal Lake Villas',
  },
  {
    vendorName: 'Sophia Martinez',
    companyName: 'DreamScape Developers',
    mobileNo: '+4455667788',
    project: 'Ocean Breeze Heights',
  },
  {
    vendorName: 'David Lee',
    companyName: 'ProBuild Inc.',
    mobileNo: '+3344556677',
    project: 'Maple Woods Estate',
  },
  {
    vendorName: 'Sarah White',
    companyName: 'GreenField Constructions',
    mobileNo: '+2233445566',
    project: 'Emerald Garden Homes',
  },
];

const VendorTable = () => {
  const [project, setProject] = useState('');
  
  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };

  return (
    <>
      {/* Dashboard Cards */}
      <Grid
        container
        spacing={3}
        sx={{
          marginBottom: 3,
          justifyContent: { xs: 'center', sm: 'flex-start' }, // Center on mobile, left-align on larger screens
        }}
      >
        {[
          { label: 'All Vendor', value: 1200 },
          { label: 'Active Vendors', value: 1089 },
          { label: 'Disabled Vendors', value: 91 },
          { label: 'Performance', value: 231 },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {card.label}
                </Typography>
                <Typography>{card.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Project Selection Dropdown */}
      <FormControl
        fullWidth
        sx={{
          marginBottom: 2,
          height: 40,
          width: { xs: '100%', sm: 200 }, // Full width on mobile, fixed width on larger screens
        }}
      >
        <InputLabel>Select Project</InputLabel>
        <Select
          value={project}
          onChange={handleProjectChange}
          label="Select Project"
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value={1}>Project A</MenuItem>
          <MenuItem value={2}>Project B</MenuItem>
          <MenuItem value={3}>Project C</MenuItem>
          <MenuItem value={4}>Project D</MenuItem>
        </Select>
      </FormControl>

      {/* Vendor Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Sr. No</b></TableCell>
              <TableCell><b>Vendor Name</b></TableCell>
              <TableCell><b>Company Name</b></TableCell>
              <TableCell><b>Mobile No</b></TableCell>
              <TableCell><b>Project</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendorData.map((vendor, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{vendor.vendorName}</TableCell>
                <TableCell>{vendor.companyName}</TableCell>
                <TableCell>{vendor.mobileNo}</TableCell>
                <TableCell>{vendor.project}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VendorTable;
